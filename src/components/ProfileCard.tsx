import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

interface Props {
    name: string;
    image: string;
    linkedin: string;
    description: string;
};

const ProfileCard = ({ name, image, linkedin, description }: Props) => {
    return (
        <Card raised={true} sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={image} alt={name} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton href={linkedin}>
                    <LinkedInIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ProfileCard;