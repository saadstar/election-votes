import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';
import { useStateContext } from '../../contexts/ContextProvider';
import { mockGeographyData } from "../../data/dummy";
import { geoFeatures } from "../../data/mockGeoFeatures";

const MapChart = () => {
  const { currentMode } = useStateContext();
 
  return (
    <div style={{ height: '420px' }}>
      <ResponsiveChoropleth
        data={mockGeographyData}
        features={geoFeatures.features} // Your GeoJSON features
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 100]}
        unknownColor="#666666"
        label="id"
        valueFormat=".0s"
        projectionScale={150}
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        enableGraticule={true}
        graticuleLineColor="#ddd"
        colors={['#f4f4f4', '#76c7c0']}
        borderColor="#ffffff"
        borderWidth={1}
        tooltip={(data) => (
          <div style={{ color: currentMode === 'Dark' ? '#fff' : '#000' }}>
            <strong>{data.id}</strong>: {data.value}
          </div>
        )}
      />
    </div>
  );
};

export default MapChart;