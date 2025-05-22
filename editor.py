"""Project Editor Application"""

import json
import ctypes
import os
import tkinter as tk
import tkinter.font as tkfont
from tkinter import ttk, filedialog, scrolledtext, messagebox, simpledialog
from typing import Dict, List, Optional

__version__ = "0.1.1"


class ProjectEditor:
    """Initialize the ProjectEditor application with the given root window."""

    def __init__(self, root):
        self.setup_dpi_awareness()

        self.root = root
        self.project_list_frame = None
        self.project_type = None
        self.project_listbox = None

        self.root.title("Projects Editor")
        self.root.geometry("800x700")
        self.root.minsize(700, 500)

        # Setting up styles and fonts
        self.style = ttk.Style()
        
        # Select theme depending on OS
        if os.name == "nt":
            self.style.theme_use("vista")  # Windows
        else:
            self.style.theme_use("clam")   # Linux/Mac
        
        # Set the base font for the entire application
        default_font = tkfont.nametofont("TkDefaultFont")
        text_font = tk.font.nametofont("TkTextFont")
        fixed_font = tk.font.nametofont("TkFixedFont")
        
        # Font size (can be adjusted)
        font_size = 10 if os.name == "nt" else 11
        
        # Setting up fonts (keep system fonts, change only the size)
        default_font.configure(size=font_size)
        text_font.configure(size=font_size)
        fixed_font.configure(size=font_size)
        
        # Special style for buttons with emoji
        try:
            self.style.configure("Emoji.TButton", font=("Segoe UI Emoji", font_size))
        except:
            self.style.configure("Emoji.TButton", font=("", font_size))
        
        # Apply fonts to all widgets
        self.root.option_add("*Font", default_font)
        
        # Initializing data
        self.projects: Dict[str, List[dict]] = {"active": [], "upcoming": []}
        self.current_project_index: Optional[int] = None
        self.current_file_path = "project.json"
        self.unsaved_changes = False

        self.setup_ui()
        self.setup_menu()
        self.load_data(self.current_file_path)
        self.update_project_list()
        self.update_preview()

    def setup_dpi_awareness(self):
        """Handle DPI awareness for Windows systems"""
        try:
            ctypes.windll.shcore.SetProcessDpiAwareness(1)
        except (AttributeError, OSError):
            try:
                ctypes.windll.user32.SetProcessDPIAware()
            except (AttributeError, OSError):
                pass

    def setup_ui(self):
        """Set up the main user interface components."""
        # Main paned window
        self.paned = ttk.PanedWindow(self.root, orient="horizontal")
        self.paned.pack(fill="both", expand=True)

        # Left frame
        self.left_frame = ttk.Frame(self.paned, width=200)
        self.paned.add(self.left_frame, weight=1)

        # Right frame
        self.right_paned = ttk.PanedWindow(self.paned, orient="vertical")
        self.paned.add(self.right_paned, weight=3)

        self.editor_frame = ttk.LabelFrame(self.right_paned, text="Projects Editor")
        self.preview_frame = ttk.LabelFrame(self.right_paned, text="Preview (project.js)")

        # Editor frame
        self.editor_frame.grid_rowconfigure(0, weight=1)
        self.editor_frame.grid_columnconfigure(0, weight=1)

        # Preview frame
        self.preview_frame.grid_rowconfigure(0, weight=1)
        self.preview_frame.grid_columnconfigure(0, weight=1)

        self.right_paned.add(self.editor_frame, weight=4)
        self.right_paned.add(self.preview_frame, weight=6)

        # Project list section
        self.setup_project_list()
        self.setup_editor()
        self.setup_preview()

    def setup_project_list(self):
        """Set up the project list section in the left frame."""
        self.project_list_frame = ttk.LabelFrame(self.left_frame, text="Projects")
        self.project_list_frame.pack(fill="both", expand=True, padx=5, pady=5)

        self.project_type = tk.StringVar(value="active")
        ttk.Radiobutton(
            self.project_list_frame,
            text="Active",
            variable=self.project_type,
            value="active",
            command=self.update_project_list,
        ).pack(anchor="w", padx=5, pady=2)
        ttk.Radiobutton(
            self.project_list_frame,
            text="Upcoming",
            variable=self.project_type,
            value="upcoming",
            command=self.update_project_list,
        ).pack(anchor="w", padx=5, pady=2)

        self.project_listbox = tk.Listbox(self.project_list_frame, height=15, exportselection=False)
        self.project_listbox.pack(fill="both", expand=True, padx=5, pady=5)
        self.project_listbox.bind("<<ListboxSelect>>", self.load_selected_project)

        # Control buttons
        btn_frame = ttk.Frame(self.left_frame)
        btn_frame.pack(fill="x", padx=5, pady=5)

        ttk.Button(btn_frame, text="➕ Add New", style="Emoji.TButton", command=self.add_new_project).pack(
            side="left", expand=True,
        )
        ttk.Button(btn_frame, text="➖ Remove", style="Emoji.TButton", command=self.remove_project).pack(
            side="left", expand=True
        )

    def setup_editor(self):
        """Set up the project editor section in the right frame."""

        self.editor_frame.grid_columnconfigure(0, weight=0, minsize=100)
        self.editor_frame.grid_columnconfigure(1, weight=1)

        # Field "Link"
        ttk.Label(self.editor_frame, text="Link:").grid(
            row=0, column=0, sticky="e", padx=5, pady=2
        )
        self.entry_link = ttk.Entry(self.editor_frame)
        self.entry_link.grid(
            row=0, column=1, 
            sticky="we", padx=(0, 5), pady=2
        )

        # Field "YouTube ID"
        ttk.Label(self.editor_frame, text="YouTube ID:").grid(
            row=1, column=0, sticky="e", padx=5, pady=2
        )
        self.entry_youtube = ttk.Entry(self.editor_frame)
        self.entry_youtube.grid(
            row=1, column=1, 
            sticky="we", padx=(0, 5), pady=2
        )

        # Language tabs
        self.setup_language_tabs()

        # Save Project button
        ttk.Button(
            self.editor_frame, 
            text="💾 Save Project", 
            style="Emoji.TButton", 
            command=self.save_current_project
        ).grid(
            row=3, column=0, columnspan=2, pady=10
        )

    def setup_language_tabs(self):
        """Set up the project editor section in the right frame."""
        self.lang_notebook = ttk.Notebook(self.editor_frame)
        self.lang_notebook.grid(
            row=2, column=0, columnspan=3, sticky="nsew", padx=5, pady=5
        )

        # English tab
        self.tab_en = ttk.Frame(self.lang_notebook)
        self.lang_notebook.add(self.tab_en, text="English")
        self.setup_language_widgets(
            self.tab_en, "Title:", "Description:", "Features (one per line):", "en"
        )

        # Russian tab
        self.tab_ru = ttk.Frame(self.lang_notebook)
        self.lang_notebook.add(self.tab_ru, text="Russian")
        self.setup_language_widgets(
            self.tab_ru, "Title:", "Description:", "Features (one per line):", "ru"
        )

    def setup_language_widgets(
        self, parent, title_label, desc_label, features_label, lang
    ):
        """Set up the language-specific tabs in the editor."""
        # Title
        ttk.Label(parent, text=title_label).pack(anchor="w", padx=5, pady=2)
        entry_title = ttk.Entry(parent)
        entry_title.pack(fill="x", padx=5, pady=2)
        entry_title.bind("<KeyRelease>", lambda e: self.set_unsaved_changes(True))

        # Description
        ttk.Label(parent, text=desc_label).pack(anchor="w", padx=5, pady=2)
        text_desc = scrolledtext.ScrolledText(parent, height=4, wrap="word")
        text_desc.pack(fill="both", expand=True, padx=5, pady=2)
        text_desc.bind("<KeyRelease>", lambda e: self.set_unsaved_changes(True))

        # Features
        ttk.Label(parent, text=features_label).pack(anchor="w", padx=5, pady=2)
        text_features = scrolledtext.ScrolledText(parent, height=4, wrap="word")
        text_features.pack(fill="both", expand=True, padx=5, pady=2)
        text_features.bind("<KeyRelease>", lambda e: self.set_unsaved_changes(True))

        # Store references
        if lang == "en":
            self.entry_title_en = entry_title
            self.text_desc_en = text_desc
            self.text_features_en = text_features
        else:
            self.entry_title_ru = entry_title
            self.text_desc_ru = text_desc
            self.text_features_ru = text_features

    def setup_preview(self):
        """Set up widgets for a specific language tab."""
        self.preview_text = scrolledtext.ScrolledText(
            self.preview_frame,
            height=10,
            wrap="none",
            font=("Consolas", 10),
            state="disabled",
        )
        self.preview_text.pack(fill="both", expand=True, padx=5, pady=5)

        ttk.Button(
            self.preview_frame, text="💾 Save All to JS", style="Emoji.TButton", command=self.save_all
        ).pack(pady=5)

    def setup_menu(self):
        """Set up the application menu bar and hotkeys."""
        menubar = tk.Menu(self.root)

        # File menu
        file_menu = tk.Menu(menubar, tearoff=0)
        file_menu.add_command(
            label="Open...", command=self.open_file, accelerator="Ctrl+O"
        )
        file_menu.add_command(
            label="Save As...", command=self.save_as, accelerator="Ctrl+Shift+S"
        )
        file_menu.add_separator()
        file_menu.add_command(
            label="Exit", command=self.confirm_exit, accelerator="Alt+F4"
        )
        menubar.add_cascade(label="File", menu=file_menu)

        # Help menu
        help_menu = tk.Menu(menubar, tearoff=0)
        help_menu.add_command(label="About", command=self.show_about)
        menubar.add_cascade(label="Help", menu=help_menu)

        self.root.config(menu=menubar)

        # Hotkeys
        self.root.bind("<Control-o>", lambda e: self.open_file())
        self.root.bind("<Control-Shift-S>", lambda e: self.save_as())
        self.root.protocol("WM_DELETE_WINDOW", self.confirm_exit)

    def set_unsaved_changes(self, status: bool):
        """Set the unsaved changes status and update window title accordingly."""
        self.unsaved_changes = status
        title = "Projects Editor" + (" *" if status else "")
        self.root.title(title)

    def confirm_exit(self):
        """Confirm application exit, checking for unsaved changes."""
        if not self.unsaved_changes or messagebox.askyesno(
            "Exit",
            "You have unsaved changes. Are you sure you want to exit?",
            icon="warning",
        ):
            self.root.quit()

    def open_file(self):
        """Open a project JSON file and load its data."""
        path = filedialog.askopenfilename(
            filetypes=[("JSON files", "*.json")], defaultextension=".json"
        )
        if path:
            try:
                self.load_data(path)
                self.current_file_path = path
                self.set_unsaved_changes(False)
                messagebox.showinfo("Success", f"File loaded: {path}")
            except Exception as e:
                messagebox.showerror("Error", f"Failed to load file:\n{e}")

    def save_as(self):
        """Save the current project data to a new file."""
        path = filedialog.asksaveasfilename(
            filetypes=[("JSON files", "*.json")],
            defaultextension=".json",
            initialfile="project.json",
        )
        if path:
            self.current_file_path = path
            if self.save_data():
                self.set_unsaved_changes(False)
                messagebox.showinfo("Success", f"File saved as: {path}")

    def show_about(self):
        """Show the about dialog with application information."""
        about_text = (
            f"Projects Editor\nVersion {__version__}\n\n" "Project Management Tool\n"
        )
        messagebox.showinfo("About", about_text)

    def load_data(self, path):
        """Load project data from a JSON file."""
        try:
            with open(path, "r", encoding="utf-8") as f:
                data = json.load(f)
                if not isinstance(data, dict) or not all(
                    k in data for k in ("active", "upcoming")
                ):
                    raise ValueError("Invalid project data format")
                self.projects = data
                self.update_project_list()
                self.update_preview()
                self.set_unsaved_changes(False)
        except FileNotFoundError:
            self.projects = {"active": [], "upcoming": []}
        except json.JSONDecodeError:
            messagebox.showerror("Error", "Invalid JSON file format")
            self.projects = {"active": [], "upcoming": []}
        except Exception as e:
            messagebox.showerror("Error", f"Failed to load data:\n{e}")
            self.projects = {"active": [], "upcoming": []}

    def save_data(self):
        """Save project data to the current file."""
        try:
            with open(self.current_file_path, "w", encoding="utf-8") as f:
                json.dump(self.projects, f, indent=4, ensure_ascii=False)
            return True
        except PermissionError:
            messagebox.showerror("Error", "Permission denied: Cannot write to file")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to save data:\n{e}")
        return False

    def save_all(self):
        """Save data to both the JSON file and project.js."""
        if not self.save_data():
            return

        try:
            with open("project.js", "w", encoding="utf-8") as f:
                js_content = (
                    "window.projectsData = "
                    f"{json.dumps(self.projects, indent=4, ensure_ascii=False)};"
                )
                f.write(js_content)

            self.update_preview()
            self.set_unsaved_changes(False)
            messagebox.showinfo(
                "Success",
                f"Projects saved to:\n{self.current_file_path}\nand project.js",
            )
        except Exception as e:
            messagebox.showerror("Error", f"Failed to save project.js:\n{e}")

    def update_preview(self):
        """Update the preview pane with current project data."""
        self.preview_text.config(state="normal")
        self.preview_text.delete("1.0", tk.END)
        self.preview_text.insert(
            "1.0",
            f"window.projectsData = {json.dumps(self.projects, indent=4, ensure_ascii=False)};",
        )
        self.preview_text.config(state="disabled")

    def update_project_list(self):
        """Update the project listbox with current project data."""
        self.project_listbox.delete(0, tk.END)
        project_type = self.project_type.get()
        for i, project in enumerate(self.projects[project_type]):
            title = project.get("en", {}).get("title", f"Untitled Project {i+1}")
            self.project_listbox.insert(tk.END, title)

    def load_selected_project(self, event=None):
        """Load the selected project into the editor."""
        selection = self.project_listbox.curselection()
        if not selection or not self.projects[self.project_type.get()]:
            self.clear_editor()
            self.current_project_index = None
            return
        
        self.current_project_index = selection[0]
        project = self.projects[self.project_type.get()][self.current_project_index]

        # Common fields
        self.entry_link.delete(0, tk.END)
        self.entry_link.insert(0, project.get("link", ""))

        self.entry_youtube.delete(0, tk.END)
        self.entry_youtube.insert(0, project.get("youtubeId", ""))

        # Language data
        self.load_language_data(project, "en")
        self.load_language_data(project, "ru")

    def load_language_data(self, project: dict, lang: str):
        """Load language-specific data into the editor."""
        lang_data = project.get(lang, {})

        if lang == "en":
            self.entry_title_en.delete(0, tk.END)
            self.entry_title_en.insert(0, lang_data.get("title", ""))

            self.text_desc_en.delete("1.0", tk.END)
            self.text_desc_en.insert("1.0", lang_data.get("description", ""))

            self.text_features_en.delete("1.0", tk.END)
            self.text_features_en.insert(
                "1.0", "\n".join(lang_data.get("features", []))
            )
        else:
            self.entry_title_ru.delete(0, tk.END)
            self.entry_title_ru.insert(0, lang_data.get("title", ""))

            self.text_desc_ru.delete("1.0", tk.END)
            self.text_desc_ru.insert("1.0", lang_data.get("description", ""))

            self.text_features_ru.delete("1.0", tk.END)
            self.text_features_ru.insert(
                "1.0", "\n".join(lang_data.get("features", []))
            )

    def add_new_project(self):
        """Add a new empty project to the current project list."""

        project_type = self.project_type.get()
        
        # Prompt user for the project name via input dialog
        project_name = simpledialog.askstring(
            "New Project", 
            "Enter project name (English):",
            initialvalue="New Project"
        )
        
        if not project_name:  # User cancelled the input
            return
        
        # Create a new project dictionary with default values
        new_project = {
            "link": "https://",
            "youtubeId": "",
            "en": {
                "title": project_name,
                "description": "",
                "features": []
            },
            "ru": {
                "title": project_name,
                "description": "",
                "features": []
            }
        }
        
        # Append the new project to the projects data structure
        self.projects[project_type].append(new_project)
        new_index = len(self.projects[project_type]) - 1
        
        # Refresh the project list UI to include the new project
        self.update_project_list()
        
        # Select the newly added project in the listbox and load it
        self.project_listbox.selection_clear(0, tk.END)
        self.project_listbox.selection_set(new_index)
        self.project_listbox.see(new_index)
        self.current_project_index = new_index
        self.load_selected_project()
        
        # Set focus to the English title entry for immediate editing
        self.entry_title_en.focus()
        self.entry_title_en.select_range(0, tk.END)
        
        # Mark that there are unsaved changes
        self.set_unsaved_changes(True)


    def save_current_project(self):
        """Save the currently edited project back to the data structure."""

        # Ensure a project is selected before saving
        if self.current_project_index is None:
            messagebox.showwarning("Warning", "No project selected")
            return
        
        project_type = self.project_type.get()
        
        # Validate mandatory fields before saving
        if not self.entry_title_en.get().strip():
            messagebox.showerror("Error", "English title is required")
            self.entry_title_en.focus()
            return
        
        # Save current UI state: focused widget and scroll position
        had_focus = self.root.focus_get()
        scroll_pos = self.project_listbox.yview()
        
        # Collect project data from UI input fields
        project = {
            "link": self.entry_link.get().strip(),
            "youtubeId": self.entry_youtube.get().strip(),
            "en": {
                "title": self.entry_title_en.get().strip(),
                "description": self.text_desc_en.get("1.0", tk.END).strip(),
                "features": self.get_features_from_text(self.text_features_en),
            },
            "ru": {
                "title": self.entry_title_ru.get().strip(),
                "description": self.text_desc_ru.get("1.0", tk.END).strip(),
                "features": self.get_features_from_text(self.text_features_ru),
            }
        }
        
        # Update the projects data structure with the new data
        self.projects[project_type][self.current_project_index] = project
        
        # Soft update the listbox item name without full refresh to preserve UI state
        current_name = self.project_listbox.get(self.current_project_index)
        if current_name != project["en"]["title"]:
            self.project_listbox.delete(self.current_project_index)
            self.project_listbox.insert(self.current_project_index, project["en"]["title"])
        
        # Restore previous selection and scroll position in the listbox
        self.project_listbox.selection_set(self.current_project_index)
        self.project_listbox.yview_moveto(scroll_pos[0])
        
        # Restore the previous focus if any
        if had_focus:
            had_focus.focus()
        
        # Update any preview or related UI elements reflecting the changes
        self.update_preview()
        
        # Mark changes as saved
        self.set_unsaved_changes(False)
        
        # Inform the user that the project was saved successfully
        messagebox.showinfo("Saved", "Project saved successfully")


    def remove_project(self):
        """Remove the currently selected project."""
        selection = self.project_listbox.curselection()
        if not selection:
            return

        if messagebox.askyesno("Confirm", "Delete this project?", icon="warning"):
            project_type = self.project_type.get()
            del self.projects[project_type][selection[0]]
            if self.save_data():
                self.update_project_list()
                self.clear_editor()
                self.set_unsaved_changes(True)

    def clear_editor(self):
        """Clear all fields in the editor."""
        self.current_project_index = None
        self.entry_link.delete(0, tk.END)
        self.entry_youtube.delete(0, tk.END)

        for widget in [
            self.entry_title_en,
            self.text_desc_en,
            self.text_features_en,
            self.entry_title_ru,
            self.text_desc_ru,
            self.text_features_ru,
        ]:
            if isinstance(widget, tk.Entry):
                widget.delete(0, tk.END)
            else:
                widget.delete("1.0", tk.END)

    def get_features_from_text(self, text_widget: tk.Text):
        """Extract features list from a text widget."""
        return [
            line.strip()
            for line in text_widget.get("1.0", tk.END).split("\n")
            if line.strip()
        ]


if __name__ == "__main__":
    root = tk.Tk()
    try:
        app = ProjectEditor(root)
        root.mainloop()
    except Exception as e:
        messagebox.showerror("Critical Error", f"The application crashed:\n{e}")
        raise