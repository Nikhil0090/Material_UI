import React from 'react'
import { Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Header() {
    return (
        <div>
            <div className="container">
                <ul>
                    <li>
                        <a href="/"><ArrowBackIcon /></a>
                    </li>
                </ul>
                <Typography
                    variant="h5"
                    color="dark"
                    Privacy settings
                >Privacy settings</Typography>
            </div>
        </div>
    )
}
