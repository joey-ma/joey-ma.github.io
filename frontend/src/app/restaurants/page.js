export default async function RestaurantsPage() {
    const {data, meta} = await getRestaurants();
    console.log('all_restaurants:', Array.isArray(data))
    console.log('meta:', meta)

    const [{id, attributes}] = data;
    console.log('id:', id)
    console.log('attributes:', attributes)

    return <div><h1>Hello!</h1>{data.map((info)=>RestaurantCard(info))}</div>
}

async function getRestaurants() {
    const response = await fetch('http://localhost:1337/api/restaurants')
    const {data, meta} = await response.json();
    return {data, meta};
}

function RestaurantCard({id, attributes}) {
    console.log('>> id:', id)
    console.log('>> attributes:', attributes)
    const { Name, Description, updatedAt} = attributes;

    return (
        <div key={id}>
            <h2>{Name}</h2>
            <div>{Description.map(p => {
                const {children} = p;
                
                return children.map(child => <p>{child.text}</p>)})}
            </div>
            <small>{updatedAt}</small>
        </div>
    )
}