import React, {useRef , useState} from 'react'
// we target any HTML DOM body using useRef
function Ex6() {

  const[len,setLen] = useState(0)
  const x = useRef()
  // const y = useRef()
  // const z = useRef()
  const fname = useRef()
  const femail = useRef()
  const fdate = useRef()
  const fmsg = useRef()


  const handler = () => {
    console.log('clicked')
    console.log(x.current.value)
      if(x.current.value === "") {
        x.current.classList.add('bg-warning')
        setTimeout(() => {
          x.current.classList.remove('bg-warning')
        },3000)
      } else {
        x.current.classList.add('bg-success')
        setTimeout(() => {
          x.current.classList.remove('bg-success')
        },3000)
      }
  }

  const handler1 = () => {
    /* console.log(y.current.value)
    console.log(z.current.value) */
    let data = {
      name:fname.current.value,
      email:femail.current.value,
      date:fdate.current.value,
     
    }
    console.log('final =',data)
  }
  const handler2 = () => {
    if(fmsg.current.value.length > 50) {
      console.log('lenght should not exclude 50 characters')
    } else {
      setLen(fmsg.current.value.length)
    }    
  }
  // console.log(fmsg.current.value)

  return (
    <div className="conatiner">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">useRef Hooks</h3>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1 id="title" className="display-2 text-danger">Test Title</h1>
            <div className="form-group">
              <input type="text" name="test" id="test" ref={x} className='form-control' />
            </div>
            <div className="form-group">
              <button className="btn btn-danger" onClick={handler}>Click me</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-body">
                <div className="form-group mt-2">
                  <label htmlFor="#">Name</label>
                  <input type="text" name="name" id="name" className='form-control' ref={fname} />
                  <label htmlFor="#">Email</label>
                  <input type="email" name="email" id="email" className='form-control' ref={femail} />
                  <label htmlFor="#">DOB</label>
                  <input type="date" name="date" id="date" className='form-control' ref={fdate} />
                  <div className="form-group">
                    <div className="col-md-12 mt-4">
                    <textarea name="text" id="" cols="50" rows="10"  ref={fmsg} onKeyUp={handler2}></textarea> <br />
                    <strong className='text-strong' id='msgLen' > {len}</strong>
                    </div>
                  </div>
                  <button className="btn btn-success" onClick={handler1}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Ex6
