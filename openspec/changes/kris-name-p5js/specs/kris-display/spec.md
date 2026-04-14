## ADDED Requirements

### Requirement: Display name on canvas
The system SHALL render the text "Kris" centered on a full-screen p5.js canvas.

#### Scenario: Page loads and shows name
- **WHEN** the user opens the website
- **THEN** the canvas fills the browser window and "Kris" is visible in the center

### Requirement: Red and blue coloring
The system SHALL display the name "Kris" using both red and blue colors.

#### Scenario: Left half is red
- **WHEN** the canvas is rendered
- **THEN** the left portion of the text "Kris" appears in red

#### Scenario: Right half is blue
- **WHEN** the canvas is rendered
- **THEN** the right portion of the text "Kris" appears in blue

### Requirement: Responsive canvas
The system SHALL resize the canvas to fill the browser window when the window is resized.

#### Scenario: Window resized
- **WHEN** the user resizes the browser window
- **THEN** the canvas updates to the new dimensions and "Kris" remains centered

### Requirement: No console errors
The system SHALL load without any JavaScript console errors.

#### Scenario: Clean load
- **WHEN** the page is opened via a local HTTP server
- **THEN** the browser console shows zero errors
