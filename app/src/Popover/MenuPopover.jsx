import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import PropTypes from 'prop-types';
import '../../Styles/Popover.css';

export default function PopoverDemo(props) {
  const { component, items } = props;

  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">{component}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          {
            items
          }
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

PopoverDemo.propTypes = {
  component: PropTypes.element.isRequired,
  items: PropTypes.element.isRequired,
};
