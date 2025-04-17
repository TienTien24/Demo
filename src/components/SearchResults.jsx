import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const SearchResults = ({ filteredContacts }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#E0F7FA",
        border: "2px solid #0288D1",
        borderRadius: "25px",
        padding: "16px",
        marginTop: "10px",
        maxHeight: "200px",
        overflowY: "auto",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: "8px",
          color: "#388E3C",
        }}
      >
        Kết quả tìm kiếm
      </Typography>
      {filteredContacts.length > 0 ? (
        <List>
          {filteredContacts.map((contact, index) => (
            <ListItem
              key={index}
              sx={{
                padding: "8px 0",
                "&:hover": {
                  backgroundColor: "#B2EBF2",
                  transition: "background-color 0.2s ease-in-out",
                },
              }}
            >
              <ListItemAvatar>
                <Avatar alt={contact.name} src={contact.avatar} />
              </ListItemAvatar>
              <ListItemText
                sx={{
                  "& .MuiTypography-root": {
                    color: "#F57C00",
                  },
                  "& .MuiTypography-root.MuiTypography-body2": {
                    color: "#455A64",
                  },
                }}
                primary={contact.name}
                secondary={contact.username}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body2" color="#808080">
          Không tìm thấy người dùng nào.
        </Typography>
      )}
    </Box>
  );
};

export default SearchResults;