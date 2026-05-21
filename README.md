# Singer 3337 Sewing Masterclass
### Interactive 3D Teaching Application — Phase 1

---

## Vision
A generational sewing masterclass experience. The user is greeted by a wise, experienced instructor
who guides them through every aspect of sewing — not just the machine, but fabric selection,
layout, measuring, cutting, hand stitching, and complete projects. The Singer 3337 is the
centerpiece: a photorealistic, fully orbitable 3D model in cream and aqua that the student
can explore like holding it in their hands.

---

## Phase Status
- [x] **Phase 1** — 3D Machine Explorer (current)
- [ ] Phase 2 — Threading & Setup Animations
- [ ] Phase 3 — Workspace: Fabric Layout, Measuring, Cutting
- [ ] Phase 4 — Techniques: Seams, Hems, Zippers, Hand Stitching
- [ ] Phase 5 — Guided Projects (Beginner → Advanced)

---

## File Structure

```
singer3337/
├── index.html                  # Entry point. Shell layout only. Imports all modules.
├── README.md                   # This file. Architecture map for future Claude sessions.
│
├── css/
│   └── main.css                # All styles. CSS variables, layout, panels, typography.
│
└── js/
    ├── app.js                  # Root init. Wires all modules together. Called by index.html.
    │
    ├── engine/
    │   └── Scene3D.js          # Three.js scene, camera, renderer, orbit controls, lighting.
    │                           # Exports: initScene(canvasId), getScene(), getCamera()
    │
    ├── machine/
    │   ├── MachineBuilder.js   # Assembles the full 3D Singer 3337 from parts.
    │   │                       # Exports: buildMachine(scene) → returns machineGroup
    │   ├── Body.js             # Main cream body geometry + aqua accent panels.
    │   ├── Arm.js              # Horizontal arm with thread guide posts.
    │   ├── Handwheel.js        # Spoked handwheel with rotation animation.
    │   ├── NeedleAssembly.js   # Needle bar, presser foot, needle plate.
    │   ├── Bobbin.js           # Bobbin door, bobbin winder spindle.
    │   └── StitchDial.js       # Front-face stitch selector dial.
    │
    ├── lessons/
    │   ├── data.js             # All lesson content, instructor dialogue, part descriptions.
    │   │                       # Each lesson: { id, title, partId, dialogue[], tip, highlight }
    │   └── LessonController.js # Manages lesson state, progress, part highlighting.
    │                           # Exports: initLessons(), setLesson(id), nextLesson()
    │
    └── ui/
        ├── InstructorPanel.js  # Left panel: instructor avatar, dialogue text, lesson list.
        ├── InfoPanel.js        # Right panel: part info, machine status, tips.
        └── Controls.js         # Bottom bar: zoom, rotate, reset view, speed slider.
```

---

## Key Design Decisions

### Why no bundler?
Browser-only deployment via GitHub Pages. All JS uses ES modules (import/export) loaded
via `<script type="module">`. Works in all modern browsers without Node or build steps.

### Three.js version
Using r128 from cdnjs. OrbitControls loaded from jsdelivr unpkg path.
Do NOT upgrade without testing — r128 is the stable version confirmed working in this env.

### Color palette
- Machine body: `#f2ede3` (warm cream)
- Aqua accent: `#4ecdc4` (Singer 3337 teal)
- Aqua dark: `#2aab a2`
- UI background: `#1a1a1f`
- Panel: `#23232a`
- Text: `#f0ece0`
- Instructor accent: `#c9963d` (warm gold)

### Instructor character
Named "Eleanor" — represents 3 generations of sewing knowledge.
Dialogue is warm, encouraging, specific. Never condescending. Always practical.
Speaks as if standing next to you at your machine.

---

## GitHub Pages Deployment
Push all files to your repo. In repo Settings → Pages → set source to main branch / root.
Your site will be at: `https://[yourusername].github.io/[reponame]/`

---

## Session Workflow (for future Claude sessions)
1. ZIP your repo and upload
2. Say which phase or feature you want to add
3. Claude reads README first, then only the relevant files
4. Claude returns updated ZIP — unzip over repo, push to GitHub