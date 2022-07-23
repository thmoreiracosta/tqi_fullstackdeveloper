export default function Counter() {
  let count = 0

  function countIncrement() {
    count += 1;
    document.getElementById("count-box").innerHTML = count;
  }

  return (
    <>
      <h1 id="count-box">{count}</h1>
      <button onClick={countIncrement}>Contar</button>
    </>
  )
}
