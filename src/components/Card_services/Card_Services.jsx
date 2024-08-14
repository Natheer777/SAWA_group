import "./Card_Services.css"
export default function Card_Services(props) {
  return (
    <>
          <div className="Best_Services_item shadow ">
        <div className="card_wrapperr">
          <img className="Services_item_img " src={props.image} alt="" loading='lazy' />
          <div className="Services_item_conent">
    
          </div>
        </div>
      </div>
    </>
  )
}
