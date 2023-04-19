<?php

namespace App\Http\Controllers;

use App\Http\Requests\KontakRequest;
use App\Http\Resources\KontakResource;
use App\Models\kontak;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class KontakController extends Controller
{
    public function index(){
        $data = kontak::all();
        return KontakResource::collection($data);
    }

    public function store(KontakRequest $request){
        $data = $request->validated();
        if(isset($data['image'])){
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }

        $kontak = kontak::create($data);

        return new KontakResource($kontak);
    }

    public function destroy(kontak $kontak){
         $kontak->delete();
         return true;
    }
     
    public function show($id){
        $data = kontak::where('id', '=', $id)->first();
        return new KontakResource($data);
    }

    public function update(KontakRequest $request, kontak $kontak){
        $data = $request->validated();
        if(isset($data['image'])){
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
            if ($kontak->image) {
                $absolutePath = public_path($kontak->image);
                File::delete($absolutePath);
            }
        }
        // $kontak = kontak::find($id);
        $result = $kontak->update($data);
        return $result;
    }

    private function saveImage($image)
    {
        // Check if image is valid base64 string
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            // Take out the base64 encoded text without mime type
            $image = substr($image, strpos($image, ',') + 1);
            // Get file extension
            $type = strtolower($type[1]); // jpg, png, gif

            // Check if file is an image
            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }

        $dir = 'images/';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }
}
