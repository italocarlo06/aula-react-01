function Item({ name, isPacked }) {  
  return (
  <li className="item">
  {isPacked ? (
    <del>
      {name + ' ✔'}
    </del>
  ) : (
    name
  )}
</li>);
}

export function PackingList() {
    return (
      <section>
        <h1>Sally Ride Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  