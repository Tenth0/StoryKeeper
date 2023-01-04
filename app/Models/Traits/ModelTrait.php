<?php

namespace App\Models\Traits;

use Carbon\Carbon;

trait ModelTrait
{

    public function saveWithTimestamps($timestamp = null, $value = null)
    {
        $date = Carbon::now();
    
        if (!$this->exists){
            if (isset($this->create_at)) {
                $this->{$this->create_at} = $date->format('Ymd');
            }
        }
    
        if (isset($this->updated_at) &&  $this->isDirty() ) {
            $this->{$this->update_date} = $date->format('Ymd');
        }
    
        if( $timestamp ) {
            $this->{$timestamp} = $value;
        }
    
        $this->save();
    
    }
    

}
