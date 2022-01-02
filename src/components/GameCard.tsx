import { Card, CardMedia } from "@mui/material";

interface Props {
    name: string;
    image: string;
};

const GameCard = ({name, image}: Props) => {
    return (
        <Card raised={true} sx={{ maxWidth: 200 }}>
            <CardMedia component="img" height="200" image={image} alt={name} />
        </Card>

    );
};

export default GameCard;