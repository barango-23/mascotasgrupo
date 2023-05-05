import'./Productos.css'
export function Productos(){
    return(
        <>
        <h1 className='texto1'>Productos</h1>
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-f9ab2.appspot.com/o/productoperro1.png?alt=media&token=9ef3b48d-9851-48f9-8cc9-20f56b0f1f5d" className="d-block w-100 img-fluid" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-f9ab2.appspot.com/o/productoperro2.png?alt=media&token=3452f3a1-73f4-4e08-95db-9007123fce43" className="d-block w-100 img-fluid " alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-f9ab2.appspot.com/o/productoperro3.webp?alt=media&token=ed2dfdbb-c7ee-4e78-a2c2-294deaabb80a" className="d-block w-100 img-fluid " alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/proyecto-f9ab2.appspot.com/o/productoperro4.jpg?alt=media&token=68418c57-cdf3-41bd-931a-087b49f21ace" className="d-block w-100 img-fluid" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
        
        
        
        </>
    )
}