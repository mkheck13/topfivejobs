import React from 'react'
import { ICard } from '../Interface/Interface'
import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'

const CardComponent = ({title, desc, link}: ICard) => {
  return (
    <div>
      <div>
        <Card className="max-w-sm w-96">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {desc}
          </p>
          <Link to={`/${link}`}>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
          >
            Read More
          </button>
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default CardComponent