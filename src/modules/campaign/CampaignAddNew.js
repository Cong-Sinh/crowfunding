import FormGroup from 'components/common/FormGroup';
import FormRow from 'components/common/FormRow';
import { Dropdown } from 'components/dropdown';
import { Input, Textarea } from 'components/input';
import { Label } from 'components/label';
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from 'quill-image-uploader';
import { Form } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'components/button';
Quill.register('modules/imageUploader', ImageUploader);
const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm();
  const [content, setContent] = useState('');
  const handleAddNewCampaign = (values) => {};
  const modules = useMemo(
    () => ({
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote'],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ['link', 'image'],
      ],
      imageUploader: {
        upload: async (file) => {
          // const bodyFormData = new FormData();
          // bodyFormData.append("image", file);
          // const response = await axios({
          //   method: "post",
          //   url: imgbbAPI,
          //   data: bodyFormData,
          //   headers: {
          //     "Content-Type": "multipart/form-data",
          //   },
          // });
          // return response.data.data.url;
        },
      },
    }),
    [],
  );
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a Campaign 🚀
        </h1>
        <form onSubmit={handleSubmit(handleAddNewCampaign)}>
          <FormRow>
            <FormGroup>
              <Label>Campaign Title</Label>
              <Input
                control={control}
                name="title"
                placeholder="write a title"
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label>Select a category</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Architecture</Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label>Short Description</Label>
            <Textarea
              name="short Description"
              placeholder="write a short..."
              control={control}
            ></Textarea>
          </FormGroup>
          <FormGroup>
            <Label>Story</Label>
            <ReactQuill
              placeholder="Write your story......"
              modules={modules}
              theme="snow"
              value={content}
              onChange={setContent}
            />
          </FormGroup>
          <div className="px-6 py-6 mb-5 text-xl font-semibold text-left text-white rounded-lg bg-secondary">
            You will get 90% of total raised
          </div>
          <FormRow>
            <FormGroup>
              <Label>Goal *</Label>
              <Input control={control} name="goal" placeholder="$$0.00 USD" />
            </FormGroup>
            <FormGroup>
              <Label>Raised amount *</Label>
              <Input control={control} name="amount" placeholder="$$0.00 USD" />
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Amount Prefilled *</Label>
              <Input
                control={control}
                name="Prefilled"
                placeholder="Amount Prefilled"
              />
              <p className="text-sm text-left text-text3">
                It will help fill amount box by click
              </p>
            </FormGroup>
            <FormGroup>
              <Label>Video *</Label>
              <Input control={control} name="video" placeholder="Video" />
              <p className="text-sm text-left text-text3">
                It will help fill amount box by click
              </p>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Capaign End Method</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Architecture</Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
            <FormGroup>
              <Label>Country</Label>
              <Dropdown>
                <Dropdown.Select placeholder="Select Country"></Dropdown.Select>
                <Dropdown.List>
                  <Dropdown.Option>Architecture</Dropdown.Option>
                  <Dropdown.Option>Crypto</Dropdown.Option>
                </Dropdown.List>
              </Dropdown>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label>Start Date</Label>
              <Input
                control={control}
                name="start_date"
                placeholder="Start Date"
              />
            </FormGroup>
            <FormGroup>
              <Label>End Date</Label>
              <Input control={control} name="end_date" placeholder="End Date" />
            </FormGroup>
          </FormRow>
          <div className="text-center ">
            <Button className="px-20 mx-auto mt-10 text-white bg-primary">
              Submit new
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignAddNew;
