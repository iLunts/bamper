app.controller('mainCtrl', function($scope, Data){
    
    $scope.Data = Data;

    // var aside = angular.element(document.querySelector('#js-aside'));
    // var asideBalance = angular.element(document.querySelector('#js-aside-balance'));
    // var asideFooter = angular.element(document.querySelector('#js-aside-footer'));
    
    // var asideHeight = asideFooter[0].offsetHeight;
    // var asideBalanceHeight = asideBalance[0].offsetHeight;
    // var asideFooterHeight = asideFooter[0].offsetHeight;

    // var asideMenuHeight = asideHeightHeight - (asideBalanceHeight + asideFooterHeight);

    $scope.config = {
        autoHideScrollbar: false,
        theme: 'minimal-dark',
        advanced: {
            updateOnContentResize: true
        },
        // setHeight: '100%',
        scrollInertia: 0,
        asix: 'x'
    }

});