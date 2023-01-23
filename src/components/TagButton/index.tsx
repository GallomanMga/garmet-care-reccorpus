import { TagContainer, TagVariant } from "./style";

interface TagProps {
    title: string;
    variant?: TagVariant
}

export function TagButton({ title, variant='primary' }: TagProps) {
    return(
        <TagContainer
            variant={variant}
        >
            {title}       
        </TagContainer>
    )
}