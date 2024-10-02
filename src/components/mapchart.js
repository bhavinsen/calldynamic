import React from 'react'
import { geoCentroid } from 'd3-geo'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

import { Box } from '@mui/material'

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const MapChart = ({ data }) => {
  return (
    <Box>
      <ComposableMap projection='geoAlbersUsa'>
        <Geographies geography={geoUrl}>
          {({ geographies }) => (
            <>
              {geographies.map(geo => {
                const cur = data?.find(s => s.id === geo.id)

                return (
                  <Geography key={geo.rsmKey} stroke='#F2F4F7' geography={geo} fill={cur ? cur?.color : '#F2F4F7'} />
                )
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </Box>
  )
}

export default MapChart
