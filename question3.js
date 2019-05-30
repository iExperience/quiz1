

// Question 3 Code: What happens when this code is executed?
function printList(list: string[]): int {
  list.forEach((listEl: string) => {
    console.log(listEl);
    return list.length;
  });
}

printList(['hello', 'my', 'friend']);
printList([1, 2, 3]);

