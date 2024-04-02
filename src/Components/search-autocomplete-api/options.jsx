export default function Options({ data, handleClick }) {
  return (
    <>
        {data && data.length
          ? data.map((item, index) => (
              <option onClick={handleClick} key={index}>
                {item}
              </option>
            ))
          : null}
    </>
  );
}
