// ------- 1-way --------
let two_numbers_1 = function(nums, target){ 
for(let i = 0; i <= nums.length; i++){
for(let j = i+1; j <= nums.length; j++){
 if(nums[i]+nums[j]==target){
   return [i, j]; 
}  }
}
}


// -------- 2-way --------
let twoSum = function(nums, target) {
    let indices = {};
  for(let i = 0; i <= nums.length; i++){
    indices[nums[i]] = i;
}
  for(let i = 0; i<=nums.length; i++){
    let r = target - nums[i];

  if(indices[r] !== undefined && i !== indices[r]){
    return [i, indices[r]]
}
} 
}

console.log(two_numbers_1([1, 2, 3, 4], 6));
console.log(twoSum([1, 2, 3, 4], 6)); 
