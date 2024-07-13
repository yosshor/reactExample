export default function SubOptions() {
  const data = [
    { key: "version", apis: Array("newversion", "last") },
    { key: "admin", apis: Array("new", "yosse") },
  ];
//   console.log(data);
  data.map((option, key) => (console.log(option,key, option[key])));
  return (
    <div>
      <p>Some Error Ouccured. Please try again letter</p>
      <h1>hello world</h1>
      <select className="togglebutton">
        <option selected disabled>
          Choose here
        </option>
        {data.length > 0
          ? data.map((option, key) => (
              <div>
                <option key={key}>{option["key"]}</option>

                <optgroup label={option["key"]}>
                  {option["key"].subOptions.map((subOpt, i) => (
                    <option>{subOpt.i}</option>
                  ))}
                </optgroup>
              </div>
            ))
          : null}
      </select>
    </div>
  );
}
