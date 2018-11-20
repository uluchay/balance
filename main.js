$(document).ready(function () {
	hideEverything();
	switchToHomeOut();
	
	$('.home-name').click(function(){
		switchToHomeIn();
	});	
	
});

function switchToHomeOut(){
	hideEverything();
	$('.home-out').show();
}
function switchToHomeIn(){
	hideEverything();
	$('.home-in').show();
}
function switchToCreateAcc(){
	hideEverything();
	$('.create-account').show();
}
function switchToInsertExpense(){
	hideEverything();
	$('.insert-expense').show();
}
function switchToAccountHistory(){
	hideEverything();
	$('.account-history').show();
}
function hideEverything(){
	$('.home-out').hide();
	$('.home-in').hide();
	$('.create-account').hide();
	$('.insert-expense').hide();
	$('.account-history').hide();
}








