const str = document.querySelector('.str');

function revers(s) {
  var result = '';
  var ary = s.split('');
  for(var i = ary.length - 1; i >= 0; i--){
    result = result + ary[i];
  }
  return result;
};

str.innerHTML = revers('Vincent');