import React from 'react'

function Dropdun(props) {
  return (
    <div>
       <a class="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">{props.Action}</a></li>
            <li><a class="dropdown-item" href="#">{props.Anotheraction}</a></li>
            <li><a class="dropdown-item" href="#">{props.Something}</a></li>
          </ul>
    </div>
  )
}

export default Dropdun
