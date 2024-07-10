import { useState } from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, ListItemButton } from '@mui/material';
import PropType from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const NestedList = ({ nodes, level = 0 }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = () => {
    setOpen(!open);
  };

  const handleNavigation = (category) => {
    navigate(`/category/view/${category.id}`, { state:  category });
  };

  const paddingLeft = level * 16 + 8; // Adjust indentation as the level increases

  return (
    <Box>
      <ListItemButton 
        onClick={nodes.children ? handleClick : () => handleNavigation(nodes)}
        sx={{
          backgroundColor: open ? theme.palette.secondary.main : 'inherit',
          paddingLeft: `${paddingLeft}px`,
      
        }}
      >
        <ListItemText primary={nodes.name} />
        {nodes.children ? (open ? <ExpandLess /> : <ExpandMore />) : null}
      </ListItemButton>
      {nodes.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {nodes.children.map((child) => (
              <NestedList key={child.id} nodes={child} level={level + 1} />
            ))}
          </List>
        </Collapse>
      )}
    </Box>
  );
};

const NestedListView = (props) => {
  return (
    <List>
      {props.data.map((item) => (
        <NestedList key={item.id} nodes={item} />
      ))}
    </List>
  );
};

NestedListView.propTypes = {
  data: PropType.array.isRequired,
};

NestedList.propTypes = {
  nodes: PropType.object.isRequired,
  level: PropType.number, // Added level prop type
};

export default NestedListView;
