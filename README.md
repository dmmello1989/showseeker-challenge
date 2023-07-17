# ShowSeeker Frontend Developer Challenge

This is my submission for the challenge to the position of Frontend Developer at ShowSeeker. This project implements a feature that allows users to specify the days of the week in text format, returning numbers to represent the days. The project is built using React and styled-components.

![ShowSeeker Code Challenge](https://github.com/dmmello1989/showseeker-challenge/assets/39010449/000ec794-fc6d-4369-84a2-a0c0c560b623)

# Challenge Scope

The function implemented in this project should be able to handle the following requirements:

- Accept days in various formats:
  - Letters: s, t, w, th, f, s, su
  - Abbreviations: mon, tue, wed, thu, fri, sat, sun
  - Full names: monday, tuesday, wednesday, etc.
- The input should be case insensitive.
- Use a comma (,) to specify individual days.
- Use a dash (-) to specify a range of consecutive days.
- The dash and comma can be combined to specify multiple individual days and ranges together.
- The function should return numbers representing the days, where Sunday is represented by 1 and Saturday by 7.
- The order of the days, dashes, or commas should not matter. For example, th,m-w,su should be interpreted as Thursday, Monday to Wednesday, Sunday.

# Project Details

This project is developed using React and styled-components to ensure a modular and maintainable codebase. The styling of the user interface is based on the ShowSeeker homepage, providing a consistent and visually appealing look.

# Usage

To input the desired days, follow the formats mentioned above:

- Use letters, abbreviations, or full names to specify the days.
- Separate individual days with commas.
- Use dashes to specify consecutive day ranges.
- Combine dashes and commas as needed.
- The numbers representing the days of the week will be returned in order from lowest to highest, where Sunday is represented by 1 and Saturday by 7.
- Only one number will be shown if repeated days are submitted.

# Error Handling

Invalid input formats will prompt an error message, ensuring that users are notified of any mistakes or inconsistencies in their input.

# Responsiveness

The project is fully responsive, providing an optimal user experience across different devices and screen sizes.

# Theme Switcher

The project includes a theme switcher feature, allowing users to toggle between light mode and dark mode.
