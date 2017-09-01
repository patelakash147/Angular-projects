myApp.controller('todo', function($scope) {
   $scope.groups =[]
   $scope.students=[]
   let iCount = 1,isPresent = false
   $scope.addGroup = function() {
		let grpObj = {modulename:$scope.modulename,moduledes:$scope.moduledes,groupId:$scope.modulename+$scope.groups.length,parentId : '',groupPresent:false}
		iCount = 1
		isPresent = false
		for(let i=0;i<$scope.groups.length;i++){

			if($scope.modulename==$scope.groups[i].modulename){
				$scope.groups[i].groupPresent = true
				grpObj.parentId = $scope.groups[i].groupId					
				isPresent= true
				break
			}
		};
		
		if(!isPresent){

			$scope.groups.push(grpObj);

		}else{
			for(let i=0;i<$scope.groups.length;i++){
				if(grpObj.parentId == $scope.groups[i].parentId){
					iCount++
				}
				
			}
			grpObj.count = iCount
			$scope.groups.push(grpObj)
		}
		$scope.modulename = null
		$scope.moduledes = null
	
	}

	$scope.removegrp = function(grp) { 
		let i = $scope.groups.indexOf(grp);
	  $scope.groups.splice(i, 1);     
	}

	$scope.addStudent = function() {

					if($scope.opt != $scope.modulename){
			
					$scope.students.push({studentname:$scope.studentname,lname:$scope.lname,email:$scope.emailadd,group:$scope.opt.groupId});
				
			}
				
			$scope.studentname = null
			$scope.lname = null
			$scope.email = null

	
	}

	$scope.removestu = function(stu) { 

		for(let i = 0, stundeLength =$scope.students.length; i < stundeLength ; i++){
			if(stu.email == $scope.students[i].email){
				$scope.students.splice(i,1);
				
			}

		}
	}
})