import { BaseItem } from '../../types/common';
import { BaseCard } from './card';
import { TagsWrapper, Tag, LevelBadge } from './tags';
import { JoinButton } from './buttons';

interface ItemCardProps {
  item: BaseItem;
  onClick?: () => void;
  children?: React.ReactNode;
}

export const ItemCard = ({ item, onClick, children }: ItemCardProps) => {
  return (
    <BaseCard onClick={onClick}>
      <div className="header">
        <span className="category">{item.category}</span>
        <LevelBadge level={item.level}>{item.level}</LevelBadge>
      </div>
      <h3>{item.title}</h3>
      {children}
      <p className="description">{item.description}</p>
      <TagsWrapper>
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsWrapper>
      <JoinButton full={item.currentMembers === item.maxMembers}>
        {item.currentMembers === item.maxMembers ? '모집완료' : '참여하기'}
      </JoinButton>
    </BaseCard>
  );
};
