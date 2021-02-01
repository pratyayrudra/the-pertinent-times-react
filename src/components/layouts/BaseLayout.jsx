import React from 'react'
import { SecondarySection, FeedSection } from "@components/sections"

function BaseLayout({ children }) {
    return (
        <div>
            <SecondarySection>
                {children}
            </SecondarySection>
            <FeedSection>
                
            </FeedSection>
        </div>
    )
}

export default BaseLayout
