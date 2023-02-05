// pages/admin.tsx
import React from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'
import toast, { Toaster } from 'react-hot-toast'

type FormValues = {
  image: FileList;
}

const CreateImageMutation = gql`
  mutation($imageUrlKey: String!) {
    createImage(imageUrlKey: $imageUrlKey) {
      imageUrlKey
    }
  }
`

const Image = () => {
  const [createImage, { data, loading, error }] = useMutation(CreateImageMutation)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  // Upload photo function
  const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length <= 0) return
    const file = e.target.files[0]
    const filename = encodeURIComponent(file.name)
    const res = await fetch(`/api/upload-image?file=${filename}`)
    const data = await res.json()
    const formData = new FormData()

    // @ts-ignore
    Object.entries({ ...data.fields, file }).forEach(([key, value]) => {
      // @ts-ignore
      formData.append(key, value)
    })

    toast.promise(
      fetch(data.url, {
        method: 'POST',
        body: formData,
      }),
      {
        loading: 'Checking image...',
        success: 'Image is ready for processing!🎉',
        error: `Something happened with that image 😥 Please try again ${error}`,
      },
    )
    console.log(data)
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log('data', data)
    const { image } = data
    const imageUrlKey = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${image[0].name}`
    const variables = { imageUrlKey }
    try {
      toast.promise(createImage({ variables }), {
        loading: 'Creating new link..',
        success: 'Link successfully created!🎉',
        error: `Something went wrong 😥 Please try again -  ${error}`,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="container mx-auto max-w-md py-12">
      <Toaster />
      <form className="grid grid-cols-1 gap-y-6 shadow-lg p-8 rounded-lg" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-3xl font-medium my-5">Select a single image</h1>
        <label className="block">
          <span className="text-gray-700">Upload a .png or .jpg image (max 1MB).</span>
          <input
            {...register('image', { required: true })}
            onChange={uploadPhoto}
            type="file"
            accept="image/png, image/jpeg"
            name="image"
          />
        </label>

        <button
          disabled={loading}
          type="submit"
          className="my-4 capitalize bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="w-6 h-6 animate-spin mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              Creating...
            </span>
          ) : (
            <span>Analyze Image</span>
          )}
        </button>
      </form>

      



    </div>
  )
}

export default Image

