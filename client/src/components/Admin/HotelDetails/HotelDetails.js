import React, {useState, useEffect} from "react";
import {
  Box,
  Image,
  Button,
  RadioGroup,
  HStack,
  Radio,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  VStack,
  SimpleGrid,
  Heading,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";
import MultiImageInput from "react-multiple-image-input";

const HotelDetails = (props) => {
  const url = "http://localhost:5000/hotel/addHotel";
  const [input, setInput] = useState("");
  const [files, setFiles] = useState([]);

  const [data, setData] = useState({
    hotelname: "",
    hotelrating: "",
    locality: "",
    state: "",
    country: "",
    pincode: "",
    amenties: "",
    checkin: "",
    checkout: "",
    // images will be added later
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        hotel_name: data.hotelname,
        hotel_rating: data.hotelrating,
        check_in: data.checkin,
        check_out: data.checkout,
        address: {
          locality: data.locality,
          state: data.state,
          country: data.country,
          pincode: data.pincode,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const handle = (e) => {
    console.log(e.target.value);
    const newdata = {...data};
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // Object.values(files).forEach((file) => {
    //   formData.append("uploadImages", file);
    // });

    // try {
    //   console.log("uploaded");
    //   console.log(files);
    // } catch (err) {
    //   if (err.response.status === 500) {
    //     console.log(err);
    //   } else {
    //     console.log(err.response.data.msg);
    //   }
  };

  return (
    <VStack>
      <Box width="40%">
        <VStack column={2} columnGap={3} rowGap={6} w="full">
          <Heading margin="20px">Hotel Details</Heading>
        </VStack>
        <SimpleGrid column={2} columnGap={3} rowGap={6} w="full">
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Hotel Name</FormLabel>
              <Input
                onChange={(e) => handle(e)}
                value={data.hotelname}
                id="hotelname"
                type="text"
                placeholder="Enter Hotel Name"
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Hotel Rating</FormLabel>
              <Input
                onChange={(e) => handle(e)}
                id="hotelrating"
                value={data.hotelrating}
                type="text"
                placeholder="Enter Hotel Rating"
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>Locality</FormLabel>
              <Input
                onChange={(e) => handle(e)}
                type="text"
                id="locality"
                value={data.locality}
                placeholder="Enter Hotel Locality"
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={1}>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Input
                onChange={(e) => handle(e)}
                type="text"
                id="state"
                value={data.state}
                placeholder="Enter State"
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Input
                onChange={(e) => handle(e)}
                type="text"
                id="country"
                value={data.country}
                placeholder="Enter Country"
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Pincode</FormLabel>
              <Input
                onChange={(e) => handle(e)}
                type="text"
                id="pincode"
                value={data.pincode}
                placeholder="Enter Pincode"
              />
            </FormControl>
          </GridItem>
        </SimpleGrid>

        <VStack column={2} columnGap={3} rowGap={6} w="full">
          <Heading margin="20px"> Amenties</Heading>
        </VStack>

        <SimpleGrid column={2} columnGap={3} rowGap={6} w="full">
          {/* <GridItem colSpan={2}>
            <FormControl as="fieldset">
              <RadioGroup defaultValue="Itachi">
                <HStack spacing="24px">
                  <Radio value="ac">AC</Radio>
                  <Radio value="pool">Pool</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </GridItem> */}
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>CheckIn Time</FormLabel>
              <Input
                onChange={(e) => handle(e)}
                type="text"
                id="checkin"
                value={data.checkin}
                placeholder=""
              />
            </FormControl>
          </GridItem>

          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Checkout Time</FormLabel>
              <Input
                onChange={(e) => handle(e)}
                type="text"
                id="checkout"
                value={data.checkout}
                placeholder=""
              />
            </FormControl>
          </GridItem>
        </SimpleGrid>
        <VStack column={2} columnGap={3} rowGap={6} w="full">
          <Heading margin="20px"> Upload Image</Heading>
        </VStack>
        <input type="file" id="file" name="uploadImages" multiple />
      </Box>

      <Button
        borderRadius="md"
        bg="cyan.600"
        _hover={{bg: "cyan.200"}}
        variant="ghost"
        type="submit"
        marginBottom={8}
      >
        Upload
      </Button>

      <Button
        borderRadius="md"
        bg="cyan.600"
        _hover={{bg: "cyan.200"}}
        variant="ghost"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </VStack>
  );
};

export default HotelDetails;
