import React from 'react'
import Sqaure from './Square'

export default function Board(){
    return(
        <div>
            <div className = 'border-row'>
                <Sqaure/>
                <Sqaure/>
                <Sqaure/>
            </div>
            <div className = 'border-row'>
                <Sqaure/>
                <Sqaure/>
                <Sqaure/>
            </div>
            <div className = 'border-row'>
                <Sqaure/>
                <Sqaure/>
                <Sqaure/>
            </div>
        </div>
    )
}