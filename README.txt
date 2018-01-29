The app pages have been created using React-Native framework.
All the required files holding the code I have written after setting up the base with 'react-native init' and importing the Router in the App.js file are in the src folder.

Additional installations I have done in the process of creating these pages are:
'react-native-easy-grid' for making the placement of the UI elements responsive,
'react-native-elements' for the trash(DELETE) icon,
'react-native-swipeout' for the swiping feature on the rows containing the items on the List View page,
'react-navigation' for routing.

I have also added an additional alert before deleting an item from the List to avoid unintended deletion as good UI practice.
Also, I have added an additional alert on not meeting password requirements to provide informative feedback to the user of the constraints, again as good UI practice.
Special characters the current code will test for in the password are: '@', '$', '#','!','%','&','*','(',')','_','+','='. I can add other special characters to the list as per requirement.


Simply these steps should get it up and running in your system.

1. git clone https://github.com/Ranjita-Das/WalmartAssessmentApp.git
2. cd WalmartAssessmentApp
2. npm install
3. react-native run-ios
