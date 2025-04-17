import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Link,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import SearchResults from "./SearchResults"; // Import component mới
import './Sidebar.css'; // Import file CSS

function Sidebar() {
  const [searchQuery, setSearchQuery] = useState("");
  const contacts = [
    {
      name: "Diogo Forlan",
      username: "@forlan77",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "Jane Smith",
      username: "@jane123",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe2",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe3",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
    {
      name: "John Doe4",
      username: "@john_doe",
      avatar: "https://via.placeholder.com/40",
    },
  ];

  // Lọc danh sách contacts dựa trên searchQuery
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Xóa từ khóa tìm kiếm
  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "360px",
        }}
      >
        {/* Thanh tìm kiếm */}
        <TextField
          placeholder="Tìm kiếm"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#0288D1" }} />
              </InputAdornment>
            ),
            endAdornment: searchQuery && (
              <InputAdornment position="end">
                <IconButton onClick={handleClearSearch}>
                  <ClearIcon sx={{ color: "#0288D1" }} />
                </IconButton>
              </InputAdornment>
            ),
            style: {
              color: "#000000",
              backgroundColor: "#B2EBF2",
              borderRadius: "25px",
              transition: "background-color 0.3s ease-in-out",
            },
            className: "search-bar",
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { border: "none" },
              "&:hover": {
                backgroundColor: "#80DEEA",
              },
            },
          }}
        />

        {/* Sử dụng SearchResults component để hiển thị kết quả tìm kiếm */}
        {searchQuery && <SearchResults filteredContacts={filteredContacts} />}

        {/* Tạo khoảng cách 30px */}
        <Box sx={{ height: "20px" }} />

        <Box
          sx={{
            backgroundColor: "#EDE7F6",
            border: "2px solid #7B1FA2",
            borderRadius: "25px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "16px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginBottom: "150px",
          }}
        >
          {/* Danh sách người liên hệ gần đây */}
          <Box sx={{}}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#388E3C",
              }}
            >
              Người liên hệ gần đây
            </Typography>
            <List>
              {contacts.map((contact, index) => (
                <ListItem key={index} sx={{ padding: "8px 0" }}>
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
            <Box sx={{ marginTop: "8px" }}>
              <Link
                href="#"
                sx={{
                  color: "#6ec207",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                <Typography>Xem thêm</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;