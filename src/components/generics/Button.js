import React from 'react'

const Button = ({type, url, title}) => {

    const getButtonClassName = () => {
        switch (type) {
            case 'yellow':
                return 'btn-login'
            case 'black':
                return 'btn-black'
            case 'transparent':
                return 'btn-transparent'
        }
    }

    return (
        <a className={getButtonClassName()} href={url}> {title} <i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default Button