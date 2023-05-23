import React from 'react';

import { ToolbarItem } from '../../editor';
import { FLAccordion } from '@fralo-tech/components';

export const ButtonSettings = () => {
  return (
    <React.Fragment>
      <FLAccordion
        title="Colors"
        props={['background', 'color']}
        summary={({ background, color }: any) => {
          return (
            <div className="flex flex-row-reverse">
              <div
                style={{
                  background:
                    background && `rgba(${Object.values(background)})`,
                }}
                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
              >
                <p
                  style={{
                    color: color && `rgba(${Object.values(color)})`,
                  }}
                  className="text-white w-full text-center"
                >
                  T
                </p>
              </div>
            </div>
          );
        }}
      >
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </FLAccordion>
      <FLAccordion
      title="Margin"
      props={['margin']}
      summary={({ margin }: any) => {
        return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
          margin[3] || 0
        }px`;
      }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />

      </FLAccordion>
      <FLAccordion title="Decoration">
        <ToolbarItem
          propKey="buttonStyle"
          type="radio"
          label="Style"
          radioValues={[
            { value: 'full', label: 'Full' },
            { value: 'outline', label: 'Outline' },
          ]}
        />
      </FLAccordion>
    </React.Fragment>
  );
};
