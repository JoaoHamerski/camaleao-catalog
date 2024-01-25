<?php

namespace Domains\Category\Observers;

use Domains\Category\Models\Category;

class CategoryObserver
{
    /**
     * Handle the Category "deleted" event.
     */
    public function deleted(Category $category): void
    {
        // $category->deleteFile('image');
    }
}
