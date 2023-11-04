# TimePicker.PCF ![GitHub all releases](https://img.shields.io/github/downloads/drivardxrm/TimePicker.PCF/total?style=plastic)
Time Picker PCF (PowerApps Component framework) Control based on React time Picker (rc-time-picker)

It will display a formatted input field with a pop-up for time entry.

It requires 2 backend fields on CDS side.

hourvalue : Whole number

minutevalue : Whole number


# Dependencies
rc-time-picker : https://github.com/react-component/time-picker

moment         : https://momentjs.com/docs/

# Parameters
| Parameter         | Description                                                                                  | 
|-------------------|----------------------------------------------------------------------------------------------|
| hourvalue         | Bind this property to the field where you want to store the hour value                       |         
| minutevalue       | Bind this property to the field where you want to store the hour value                       |         
| displaytype       | 12 Hours or 24 hours format                                                                  |   
| hourstep          | optional - interval for hour selection (default 1)                                                                  |   
| minutestep        | optional - interval for minute selection (default 1)                                                                  |   
| editenabled       | optional - enable manual edit (default false)                                                                  |   



# Screenshots
![alt text](https://github.com/drivardxrm/TimePicker.PCF/blob/master/timepicker.png?raw=true)

![alt text](https://github.com/drivardxrm/TimePicker.PCF/blob/master/timepicker_pcf.gif?raw=true)


# Installation
You can install the component directly from solution files containes in the 'Release' section
https://github.com/drivardxrm/TimePicker.PCF/releases

# Get required tools

To use Microsoft PowerApps CLI, do the following:

* Install Npm (comes with Node.js) or install Node.js (comes with npm). We recommend LTS (Long Term Support) version 10.15.3 LTS as it seems to be most stable.

* Install .NET Framework 4.6.2 Developer Pack.

* If you don’t already have Visual Studio 2017 or later, follow one of the options below:

  * Option 1: Install Visual Studio 2017 or later.
  * Option 2: Install .NET Core 2.2 SDK and then install Visual Studio Code.
* Install Microsoft PowerApps CLI.

Be sure to update your Microsoft PowerApps CLI to the latest version: 
```bash
pac install latest
```
# Build the control

* Clone the repo/ download the zip file.
* Navigate to ./TimePicker/ folder.
* Copy the folder path and open it in visual studio code.
* Open the terminal, and run the command the following command to install the project dependencies:
```bash
npm install
```
Then run the command:
```bash
npm run start
```
# Build the solution

* Create a new solution folder and open the Developer command prompt.
* Change the directory to the newly created folder in previous step.
* Init the future solution:
```bash
pac solution init --publisherName someName --customizationPrefix someSolutionPrefix
``` 
* Add the control to your future solution:
```bash
pac solution add-reference --path provide path of control project folder where the pcf.proj is available
``` 
* Build 1/2:
```bash
msbuild /t:restore
``` 
* Build 2/2:
```bash
msbuild
``` 
* You will have the solution file in SolutionFolder/bin/debug folder!

If you want to change the solution type you have to edit the .cdsproj file:
```bash
Solution Packager overrides, un-comment to use: SolutionPackagerType (Managed, Unmanaged, Both)
  <PropertyGroup>
    <SolutionPackageType>Managed</SolutionPackageType>
  </PropertyGroup>

  ```
