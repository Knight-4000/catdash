
import Items from '../assets/data/items'

export default function Landing() {
  return (
    <div>
      <h1 className="text-center">Landing page</h1>
      <div className="row justify-content-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                place-items-center">
                {Object.entries(Items).map(([slug, { name, picture, description }]) => (
                <div key={slug}>
                    
                    <div className="py-2 px-2">
                    <img src={picture} alt={name} className="kitty-pic object-cover" />
                </div>
                    <h3 className="text-center">{name}</h3>
                    <h3 className="text-center">{description}</h3>
                    
                </div>
                ))}
            </div>
        </div>

    </div>
  )
}
