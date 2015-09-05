class RepsController < ApplicationController
  def index
    @reps = Reps.all.order(created_at: :desc)
    render json: @reps, include: { user: { only: [:handle] } }, only: [:id, :reps, :weight]
  end

  def create
    @rep = Reps.new(rep_params)
    if @rep.save
      render json: @rep, include: {  }, only: [:id, :reps, :weight], status: :created, location: rep_url(@reps, format: :json)
    else
      render json: @rep.errors, status: :unprocessable_entity
    end
  end

  private
  def rep_params
    params.require(:reps).permit(:rep, :weight)
  end

end