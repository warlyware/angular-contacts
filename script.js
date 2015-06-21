var contactsData = [
  { firstName: 'Dan', lastName: 'Ward', phone: '352-867-5309', email: 'danward@gmail.com'},
  { firstName: 'Ron', lastName: 'Johnson', phone: '555-867-5309', email: 'r.johnson@gmail.com'}
];


var app = angular.module("contactsApp", []);

app.controller("ContactsCtrl", function($scope) {
  $scope.contacts = contactsData;

  $scope.addContact = function() {
    console.log('add contact');
    var newContact = {
      firstName: $scope.firstNameInput,
      lastName: $scope.lastNameInput,
      phone: $scope.phoneInput,
      email: $scope.emailInput
    };
    contactsData.push(newContact);
  }
});