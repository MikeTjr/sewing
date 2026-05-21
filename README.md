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
├── index.html                  Entry point. Shell layout only. Imports all modules.
├── README.md                   This file. Architecture map for future Claude sessions.
│
├── css/
│   └── main.css                All styles. CSS vars, layout, panels, typography.
│
└── js/
    ├── app.js                  Root init. Wires all modules. Called by index.html.
    │
    ├── engine/
    │   └── Scene3D.js          Three.js scene, camera, renderer, orbit controls, lighting.
    │
    ├── machine/
    │   ├── MachineBuilder.js   Assembles full 3D Singer 3337 from part modules.
    │   ├── Body.js             Main cream body + aqua accent panels.
    │   ├── Arm.js              Horizontal arm with thread guide posts.
    │   ├── Handwheel.js        Spoked handwheel with rotation animation.
    │   ├── NeedleAssembly.js   Needle bar, presser foot, needle plate.
    │   ├── Bobbin.js           Bobbin door, bobbin winder spindle.
    │   └── StitchDial.js       Front-face stitch selector dial.
    │
    ├── lessons/
    │   ├── data.js             All lesson content, instructor dialogue, part descriptions.
    │   └── LessonController.js Manages lesson state, progress, part highlighting.
    │
    └── ui/
        ├── InstructorPanel.js  Left panel: instructor avatar, dialogue, lesson list.
        ├── InfoPanel.js        Right panel: part info, machine status, tips.
        └── Controls.js         Bottom bar: zoom, rotate, reset view, speed slider.
```

---

## Key Design Decisions

### No bundler — pure ES modules
Browser-only via GitHub Pages. All JS uses import/export loaded via script type=module.
Works in all modern browsers without Node or build steps.

### Three.js version
Using r128 from cdnjs. OrbitControls from jsdelivr.
Do NOT upgrade without testing — r128 confirmed working in this environment.

### Color Palette
- Machine body:   #f2ede3  (warm cream)
- Aqua accent:    #4ecdc4  (Singer 3337 teal)
- Aqua dark:      #2aaba2
- Chrome/metal:   #c8cdd4
- UI background:  #1a1a1f
- Panel bg:       #23232a
- Panel border:   #35353f
- Text primary:   #f0ece0
- Text muted:     #8a8a9a
- Gold accent:    #c9963d  (instructor warmth)
- Rust highlight: #b84a1e

### Instructor Character: Eleanor
Represents 3 generations of sewing knowledge. Warm, encouraging, specific, practical.
Never condescending. Speaks as if standing next to you at your machine.
Dialogue lives entirely in js/lessons/data.js — easy to expand.

### Raycasting for Part Selection
MachineBuilder tags each mesh with userData.partId.
Scene3D handles raycasting on click/tap and calls LessonController.selectPart(id).
This is the bridge between the 3D model and the teaching content.

---

## GitHub Pages Deployment
Push all files to repo root. Settings > Pages > source: main branch / root.
Live at: https://[username].github.io/[reponame]/

---

## Session Workflow for Future Claude Sessions
1. ZIP your repo folder and upload to Claude
2. Describe what you want added or changed
3. Claude reads README first, then only relevant changed files
4. Claude returns a complete updated ZIP
5. Unzip over your repo folder, push to GitHub — done