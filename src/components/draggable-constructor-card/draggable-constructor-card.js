import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styles from './draggable-constructor-card.module.css';
import {
  ConstructorElement,
  DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function DraggableConstructorCard({ item, onItemClick, index, id, moveCard }) {
  let ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: 'constructor-card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: 'constructor-card',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li
      key={item.key}
      className={`pr-2 mb-2 ${styles.listItem}`}
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity }}
    >
      <div className={styles.listIcon}>
        <DragIcon type='primary' />
      </div>
      <ConstructorElement
        thumbnail={item.image_mobile}
        text={item.name}
        price={item.price}
        isLocked={false}
        handleClose={() => onItemClick(item)}
      />
    </li>
  );
}

export default DraggableConstructorCard;
