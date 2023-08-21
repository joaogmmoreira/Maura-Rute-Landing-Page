import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import PropTypes from 'prop-types';
import '../Styles/MenuPopover.css';

export default function MenuPopover(props) {
  const { items } = props;
  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">
        <span className="material-symbols-outlined">Menu</span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={5}>
          <div className="div-mobile">
            {
            items
            }
          </div>
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

MenuPopover.propTypes = {
  items: PropTypes.element.isRequired,
};
