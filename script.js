var contactsData = [];


var app = angular.module("contactsApp", []);

app.controller("ContactsCtrl", function($scope) {
  $scope.contacts = contactsData;

  $scope.addContact = function() {
    console.log('add contact');
    var userHash = CryptoJS.MD5($scope.emailInput);
    var userHashString = userHash.toString(CryptoJS.enc.Hex);
    console.log(userHashString);
    $scope.hashMsg = userHashString;
    var newContact = {
      gravitarHash: userHashString,
      firstName: $scope.firstNameInput,
      lastName: $scope.lastNameInput,
      phone: $scope.phoneInput,
      email: $scope.emailInput
    };
    contactsData.push(newContact);
  }

  $scope.editContract = function() {
    console.log('edit contact');
  }
});