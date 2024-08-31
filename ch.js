function main() {
  let a=0;
  console.log(a);
  return function () {
    a++;
    console.log(a);
  };
}

child=main();

child()
child()
child()

main()
