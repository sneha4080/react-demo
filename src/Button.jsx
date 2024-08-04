function printHello() {
  console.log("Hello!");
}

function printBye() {
  console.log("Bye!");
}

export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click !</button>
      <p onMouseMove={printBye}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas dicta
        explicabo atque ullam quaerat tempora adipisci quas. Aperiam hic, facere
        veniam doloremque possimus, eius dolor, quos quibusdam quaerat unde
        molestiae.
      </p>
    </div>
  );
}
