# take-home-test

Test developed by Giovanne Guerra for Mooncascade.

# The task
## Implement the following software:

1 - Server/service, that receives the timing information in real-time. Protocol is not known at the moment - just design it yourself in the way you wish it. You can’t use the real timing system for testing - create a test-client that sends some dummy data instead.

2 - Web user interface, that displays in real-time in table form the athletes who have entered the finish corridor in the following way:
    - When athlete enters the finish corridor, a corresponding row is added to the table, where the athlete’s start number and name is displayed.
    - When the athlete crosses the finish line, the finish time is added to the athlete’s row.
    -Design the UI in the way, that the athlete’s who entered to the finish corridor last, would be visible to the user without any effort from the user - the older rows/records just move out of the visible area, sequentially.
    -Demonstrate the functioning of the system with the test-client that sends the dummy data.
    -Try to design the user interface in the way, that user don’t have to put any effort or do any additional moves in order to see something (for example, no need to “refresh” or scroll the page or do any other annoyances), so that he/she would understand adequately what is happening and won’t get confused.

## Non-mandatory additional tasks:

3 - Make sure that the athletes who cross the finish-line would be displayed in the correct order - for example, if athlete A enters the finish corridor before athlete B, then they are displayed in the order of entering the corridor. But if athlete B passes the athlete A in the finish corridor (i.e. the athlete B crosses the finish line before the athlete A), then adjust the displayed order accordingly. Demonstrate it with the dummy test-client.

4 - Do so that the web user interface would interact with the server in real-time only, when the browser window is in foreground / active. If user brings some other application window into foreground, then the web user interface has to stop the communication with the server. I the user activates the web browser window again, the real-time communication with the server must be resumed.

5 - If the browser window has been deactivated meantime and the user brings it to foreground again, then, depending on the technical solution, there might be situation where there is a “gap” in the information that has been received from the server (because the communication with the server didn’t happen and the information was not sent). In that case, think / propose, how it could be handled in the user interface so, that user would understand it adequately and won’t get confused.

======================================
## Front-end requirements
======================================
Option 1: React
    -Use Redux or MobX (or similar) for state management
    -For the CSS, use your preferred toolset (Sass, inline styling, CSS-modules, styled-components, etc)
    -Write JavaScript using ES6
Using jQuery is discouraged

# How to start the application

1 -  First get this project on the repository, typying:
    git clone https://github.com/giovanneguerra/take-home-test.git

2 - After installation, verify if you have node and yarn installed on your machine.
    if not:
    https://nodejs.org/en/download/
    https://yarnpkg.com/lang/en/docs/install/#windows-stable

3 - Get the packages with yarn:
    yarn install

4 - Run the application with yarn:
    yarn start

### WARNING: Check if you're running the flask and python back-end to have all the data on the table, otherwise, it will not work!!!!!!
#### PS: This application only worked with python 3.6.5 on windows.
    
