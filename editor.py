import json
import tkinter as tk
from tkinter import ttk, filedialog, scrolledtext, messagebox
from typing import Dict, List, Optional, Union

__version__ = "0.1.1"

class ProjectEditor:
    def __init__(self, root: tk.Tk):
        self.root = root
        self.root.title("Project.js Editor")
        self.root.geometry("900x700")
        
        self.projects: Dict[str, List[dict]] = {"active": [], "upcoming": []}
        self.current_project_index: Optional[int] = None
        self.current_file_path: str = "project.json"
        
        self.setup_ui()
        self.setup_menu()
        self.load_data(self.current_file_path)
        self.update_project_list()
        self.update_preview()

    def setup_ui(self):
        # Configure grid weights for proper resizing
        self.root.grid_rowconfigure(0, weight=1)
        self.root.grid_columnconfigure(0, weight=1)

        # Main paned window with a horizontal splitter
        self.paned = ttk.PanedWindow(self.root, orient="horizontal")
        self.paned.pack(fill="both", expand=True)

        # Left frame for project list and controls
        self.left_frame = ttk.Frame(self.paned, width=200)
        self.left_frame.pack_propagate(False)
        self.paned.add(self.left_frame, weight=1)

        # Right frame for editor and preview
        self.right_frame = ttk.Frame(self.paned)
        self.paned.add(self.right_frame, weight=3)

        # Project list section
        self.setup_project_list_section()
        self.setup_editor_section()
        self.setup_preview_section()

    def setup_project_list_section(self):
        self.project_list_frame = ttk.LabelFrame(self.left_frame, text="Projects")
        self.project_list_frame.pack(fill="both", expand=True, padx=5, pady=5)

        self.project_type = tk.StringVar(value="active")
        ttk.Radiobutton(
            self.project_list_frame, text="Active", variable=self.project_type,
            value="active", command=self.update_project_list
        ).pack(anchor="w", padx=5, pady=2)
        ttk.Radiobutton(
            self.project_list_frame, text="Upcoming", variable=self.project_type,
            value="upcoming", command=self.update_project_list
        ).pack(anchor="w", padx=5, pady=2)

        self.project_listbox = tk.Listbox(self.project_list_frame, height=15)
        self.project_listbox.pack(fill="both", expand=True, padx=5, pady=5)
        self.project_listbox.bind("<<ListboxSelect>>", self.load_selected_project)

        # Project control buttons
        self.control_frame = ttk.Frame(self.left_frame)
        self.control_frame.pack(fill="x", padx=5, pady=5)

        ttk.Button(self.control_frame, text="Add New", command=self.add_new_project).pack(side="left", expand=True)
        ttk.Button(self.control_frame, text="Remove", command=self.remove_project).pack(side="left", expand=True)

    def setup_editor_section(self):
        self.editor_frame = ttk.LabelFrame(self.right_frame, text="Project Editor")
        self.editor_frame.pack(fill="both", expand=True, padx=5, pady=5)
        self.editor_frame.grid_columnconfigure(1, weight=1)

        # Common fields
        ttk.Label(self.editor_frame, text="Link:").grid(row=0, column=0, sticky="e", padx=5, pady=2)
        self.entry_link = ttk.Entry(self.editor_frame)
        self.entry_link.grid(row=0, column=1, columnspan=2, sticky="we", padx=5, pady=2)

        ttk.Label(self.editor_frame, text="YouTube ID:").grid(row=1, column=0, sticky="e", padx=5, pady=2)
        self.entry_youtube = ttk.Entry(self.editor_frame)
        self.entry_youtube.grid(row=1, column=1, sticky="w", padx=5, pady=2)

        # Language tabs
        self.setup_language_tabs()

        # Save project button
        self.save_button = ttk.Button(
            self.editor_frame, 
            text="Save Project", 
            command=self.save_current_project
        )
        self.save_button.grid(row=3, column=0, columnspan=3, pady=10)

    def setup_language_tabs(self):
        self.lang_notebook = ttk.Notebook(self.editor_frame)
        self.lang_notebook.grid(row=2, column=0, columnspan=3, sticky="nsew", padx=5, pady=5)

        # English tab
        self.tab_en = ttk.Frame(self.lang_notebook)
        self.lang_notebook.add(self.tab_en, text="English")
        self.setup_language_tab(self.tab_en, "Title:", "Description:", "Features (one per line):")

        # Russian tab
        self.tab_ru = ttk.Frame(self.lang_notebook)
        self.lang_notebook.add(self.tab_ru, text="Русский")
        self.setup_language_tab(self.tab_ru, "Название:", "Описание:", "Особенности (каждая с новой строки):")

    def setup_language_tab(self, parent, title_label, desc_label, features_label):
        parent.grid_rowconfigure(3, weight=1)
        parent.grid_columnconfigure(0, weight=1)

        # Title
        ttk.Label(parent, text=title_label).pack(anchor="w", padx=5, pady=2)
        entry_title = ttk.Entry(parent)
        entry_title.pack(fill="x", padx=5, pady=2)

        # Description
        ttk.Label(parent, text=desc_label).pack(anchor="w", padx=5, pady=2)
        text_desc = scrolledtext.ScrolledText(parent, height=4, wrap="word")
        text_desc.pack(fill="both", expand=True, padx=5, pady=2)

        # Features
        ttk.Label(parent, text=features_label).pack(anchor="w", padx=5, pady=2)
        text_features = scrolledtext.ScrolledText(parent, height=4, wrap="word")
        text_features.pack(fill="both", expand=True, padx=5, pady=2)

        # Store references to widgets
        if "English" in parent.winfo_parent():
            self.entry_title_en = entry_title
            self.text_desc_en = text_desc
            self.text_features_en = text_features
        else:
            self.entry_title_ru = entry_title
            self.text_desc_ru = text_desc
            self.text_features_ru = text_features

    def setup_preview_section(self):
        self.preview_frame = ttk.LabelFrame(self.right_frame, text="Preview (project.js)")
        self.preview_frame.pack(fill="both", expand=True, padx=5, pady=5)

        self.preview_text = scrolledtext.ScrolledText(
            self.preview_frame, 
            height=10, 
            wrap="none",
            font=("Consolas", 10)  # Monospaced font for better readability
        )
        self.preview_text.pack(fill="both", expand=True, padx=5, pady=5)

        # Save all projects button
        ttk.Button(
            self.right_frame, 
            text="Save All to project.js", 
            command=self.save_all
        ).pack(pady=5)

    def setup_menu(self):
        menubar = tk.Menu(self.root)

        # File menu
        file_menu = tk.Menu(menubar, tearoff=0)
        file_menu.add_command(
            label="Open...", 
            command=self.open_file, 
            accelerator="Ctrl+O"
        )
        file_menu.add_command(
            label="Save As...",
            command=self.save_as,
            accelerator="Ctrl+Shift+S"
        )
        file_menu.add_separator()
        file_menu.add_command(
            label="Exit", 
            command=self.confirm_exit, 
            accelerator="Alt+F4"
        )
        menubar.add_cascade(label="File", menu=file_menu)

        # Help menu
        help_menu = tk.Menu(menubar, tearoff=0)
        help_menu.add_command(label="About", command=self.show_about)
        menubar.add_cascade(label="Help", menu=help_menu)

        self.root.config(menu=menubar)

        # Hot Keys
        self.root.bind("<Control-o>", lambda e: self.open_file())
        self.root.bind("<Control-Shift-S>", lambda e: self.save_as())

    def confirm_exit(self):
        if messagebox.askokcancel("Exit", "Do you want to exit?"):
            self.root.quit()

    def open_file(self):
        path = filedialog.askopenfilename(
            filetypes=[("JSON files", "*.json")],
            defaultextension=".json"
        )
        if path:
            try:
                self.load_data(path)
                self.current_file_path = path
                messagebox.showinfo("Success", f"File loaded: {path}")
            except Exception as e:
                messagebox.showerror("Error", f"Failed to load file:\n{e}")

    def save_as(self):
        path = filedialog.asksaveasfilename(
            filetypes=[("JSON files", "*.json")],
            defaultextension=".json",
            initialfile="projects.json"
        )
        if path:
            try:
                self.current_file_path = path
                self.save_data()
                messagebox.showinfo("Success", f"File saved as: {path}")
            except Exception as e:
                messagebox.showerror("Error", f"Failed to save file:\n{e}")

    def show_about(self):
        about_text = (
            f"Projects Editor\nVersion {__version__}\n\n"
            "Project Management Tool\n"
            "© 2023 All rights reserved"
        )
        messagebox.showinfo("About", about_text)

    def load_data(self, path: str):
        try:
            with open(path, "r", encoding="utf-8") as f:
                data = json.load(f)
                if not all(key in data for key in ("active", "upcoming")):
                    raise ValueError("Invalid project data format")
                self.projects = data
                self.update_project_list()
                self.update_preview()
        except FileNotFoundError:
            self.projects = {"active": [], "upcoming": []}
        except json.JSONDecodeError:
            messagebox.showerror("Error", "Invalid JSON file format")
        except Exception as e:
            messagebox.showerror("Error", f"Failed to load data:\n{e}")
            self.projects = {"active": [], "upcoming": []}

    def save_data(self):
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
        if not self.save_data():
            return
            
        try:
            with open("project.js", "w", encoding="utf-8") as f:
                js_content = f"window.projectsData = {json.dumps(self.projects, indent=4, ensure_ascii=False)};"
                f.write(js_content)
            
            self.update_preview()
            messagebox.showinfo(
                "Success", 
                f"Projects saved to:\n{self.current_file_path}\nand project.js"
            )
        except Exception as e:
            messagebox.showerror("Error", f"Failed to save project.js:\n{e}")

    def update_preview(self):
        self.preview_text.config(state="normal")
        self.preview_text.delete("1.0", tk.END)
        self.preview_text.insert(
            "1.0", 
            f"window.projectsData = {json.dumps(self.projects, indent=4, ensure_ascii=False)};"
        )
        self.preview_text.config(state="disabled")

    def update_project_list(self):
        self.project_listbox.delete(0, tk.END)
        project_type = self.project_type.get()
        for i, project in enumerate(self.projects[project_type]):
            title = project.get("en", {}).get("title", f"Untitled Project {i+1}")
            self.project_listbox.insert(tk.END, title)

    def load_selected_project(self, event=None):
        selection = self.project_listbox.curselection()
        if not selection or not self.projects[self.project_type.get()]:
            self.clear_editor()
            return
            
        self.current_project_index = selection[0]
        project_type = self.project_type.get()
        project = self.projects[project_type][self.current_project_index]

        # Load common fields
        self.entry_link.delete(0, tk.END)
        self.entry_link.insert(0, project.get("link", ""))
        
        self.entry_youtube.delete(0, tk.END)
        self.entry_youtube.insert(0, project.get("youtubeId", ""))

        # Load language data
        self.load_language_data(project, "en")
        self.load_language_data(project, "ru")

    def load_language_data(self, project: dict, lang: str):
        lang_data = project.get(lang, {})
        
        if lang == "en":
            self.entry_title_en.delete(0, tk.END)
            self.entry_title_en.insert(0, lang_data.get("title", ""))
            
            self.text_desc_en.delete("1.0", tk.END)
            self.text_desc_en.insert("1.0", lang_data.get("description", ""))
            
            self.text_features_en.delete("1.0", tk.END)
            self.text_features_en.insert("1.0", "\n".join(lang_data.get("features", [])))
        else:
            self.entry_title_ru.delete(0, tk.END)
            self.entry_title_ru.insert(0, lang_data.get("title", ""))
            
            self.text_desc_ru.delete("1.0", tk.END)
            self.text_desc_ru.insert("1.0", lang_data.get("description", ""))
            
            self.text_features_ru.delete("1.0", tk.END)
            self.text_features_ru.insert("1.0", "\n".join(lang_data.get("features", [])))

    def add_new_project(self):
        project_type = self.project_type.get()
        new_project = {
            "link": "",
            "youtubeId": "",
            "en": {
                "title": "New Project",
                "description": "",
                "features": []
            },
            "ru": {
                "title": "Новый проект",
                "description": "",
                "features": []
            }
        }
        self.projects[project_type].append(new_project)
        if self.save_data():
            self.update_project_list()
            self.project_listbox.selection_clear(0, tk.END)
            self.project_listbox.selection_set(tk.END)
            self.load_selected_project()

    def remove_project(self):
        selection = self.project_listbox.curselection()
        if not selection:
            return
            
        if messagebox.askyesno(
            "Confirm", 
            "Delete this project?",
            icon="warning"
        ):
            project_type = self.project_type.get()
            del self.projects[project_type][selection[0]]
            if self.save_data():
                self.update_project_list()
                self.clear_editor()

    def clear_editor(self):
        self.current_project_index = None
        self.entry_link.delete(0, tk.END)
        self.entry_youtube.delete(0, tk.END)
        
        for widget in [
            self.entry_title_en, self.text_desc_en, self.text_features_en,
            self.entry_title_ru, self.text_desc_ru, self.text_features_ru
        ]:
            if isinstance(widget, tk.Entry):
                widget.delete(0, tk.END)
            else:
                widget.delete("1.0", tk.END)

    def save_current_project(self):
        if self.current_project_index is None:
            messagebox.showwarning("Warning", "No project selected")
            return
            
        project_type = self.project_type.get()
        project = {
            "link": self.entry_link.get(),
            "youtubeId": self.entry_youtube.get(),
            "en": {
                "title": self.entry_title_en.get(),
                "description": self.text_desc_en.get("1.0", tk.END).strip(),
                "features": self.get_features_from_text(self.text_features_en)
            },
            "ru": {
                "title": self.entry_title_ru.get(),
                "description": self.text_desc_ru.get("1.0", tk.END).strip(),
                "features": self.get_features_from_text(self.text_features_ru)
            }
        }
        
        self.projects[project_type][self.current_project_index] = project
        if self.save_data():
            self.update_project_list()
            self.update_preview()
            messagebox.showinfo("Success", "Project saved!")

    def get_features_from_text(self, text_widget: tk.Text) -> List[str]:
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